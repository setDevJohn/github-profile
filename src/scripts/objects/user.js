const user = {
    avatarUrl: '',
    name: '',
    bio:'',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    eventsList: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(eventsList){
        let eventItens = [];

        eventsList.forEach(event =>{
            if (eventItens.length < 10) {
                if (event.type === 'PushEvent' || event.type === 'CreateEvent') {
                    eventItens.push(event)
                }
            }
        })

        this.eventsList = eventItens
    }
}

export { user }

