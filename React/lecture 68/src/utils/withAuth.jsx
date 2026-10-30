
function withAuth(Component) {
    return function (props){
        let isLOggedIn = true;
        if(isLOggedIn){
        return <Component {...props}/>
        }

        return <p>Please login to access the Dashboard</p>
    }
}

export default withAuth;