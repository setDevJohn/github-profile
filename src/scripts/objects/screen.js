const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário">
                                        <div>
                                          <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                          <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                        </div>
                                      </div>`

        this.userProfile.innerHTML += `<div class="followers">
                                        <h3>Seguidores: ${user.followers}</h3>
                                        <h3>Seguindo: ${user.following}</h3>
                                      </div>`
	},
	renderRepositories(user){
		let repositoriesItens = "";
        user.repositories.forEach(repo => {
            repositoriesItens += `<li>
									<a href="${repo.html_url}" target="_blank">
									  	<h3>${repo.name}</h3>
										<ul class="repositories-info">
											<li>🍴${repo.forks_count}</li>
											<li>⭐${repo.stargazers_count}</li>
											<li>👀${repo.watchers_count}</li>
											<li>👩‍💻${repo.language ?? ''}</li>
										</ul>
									</a>
								  </li>`
        })
        this.userProfile.innerHTML += `<div class="repositories section">
                                		<h2>Repositories</h2>
                                        <ul>${repositoriesItens}</ul>
                                      </div>`   
    },
	renderEvents(user){
		let eventItens = '';
		user.eventsList.forEach(event => {
			if (event.type === 'PushEvent'){
				eventItens += `<li><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</li>`
			}else{
				eventItens += `<li><span>${event.repo.name}</span> - Create event</li>`
			}
		})
		this.userProfile.innerHTML += `<div class="events">
										<h2>Eventos</h2>
										<ul>${eventItens}</ul>
									  </div>`
	},
	renderNotFound(){
		this.userProfile.innerHTML = "Usuário não encontrado" 
	}
}

export { screen }