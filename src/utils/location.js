
function iAmOutOfImportantRoutes () {
    return window.location.pathname.includes("/home") || 
    window.location.pathname == "/" || 
    window.location.pathname.includes("/our-mission") || 
    window.location.pathname.includes("/update-password") || 
    window.location.pathname.includes("/policy") ||
    window.location.pathname.includes("/signup")
}


function authRoutes () {
    return window.location.pathname.includes("/preset") || 
    window.location.pathname.includes("/plants") || 
    window.location.pathname.includes("/plantsai/") ||
    window.location.pathname.includes("/how-to-use-it") || 
    window.location.pathname.includes("/plan")
}

function homePages () {
    return window.location.pathname.includes("/home") || 
    window.location.pathname.includes("/our-mission") || 
    window.location.pathname.includes("/policy");
}

function loginSignupPages () {
    return window.location.pathname.includes("/login") || 
    window.location.pathname.includes("/waiting-confirmation") || 
    window.location.pathname.includes("/update-password") || 
    
    window.location.pathname.includes("/signup");
}


function hideSidebar () {
    return window.location.pathname.includes("/home") || 
     window.location.pathname == "/" || 
    window.location.pathname.includes("/our-mission") || 
    window.location.pathname.includes("/policy") ||
    window.location.pathname.includes("/waiting-confirmation") || 
    window.location.pathname.includes("/update-password") || 

    window.location.pathname.includes("/login") || 
    window.location.pathname.includes("/signup") || 
    window.location.pathname.includes("/confirm-user")
}

function iAmInImportantRoutes() {
    return window.location.pathname.includes("/preset") || 
    window.location.pathname.includes("/plants") || 
    window.location.pathname.includes("/plantsai/") ||
    window.location.pathname.includes("/plan") || 
    window.location.pathname.includes("/how-to-use-it") || 
    window.location.pathname.includes("/home")
}

function iAmOutOfImportantRoutes1() {
    return window.location.pathname.includes("/home") || 
    window.location.pathname.includes("/our-mission") || 
    window.location.pathname.includes("/policy") || 
    window.location.pathname.includes("/waiting-confirmation") || 
    window.location.pathname.includes("/confirm-user")
}

function isJwtokenExist () {
    const localJwtoken = localStorage.getItem("jwtoken");
    return localJwtoken !== null &&
    localJwtoken !== undefined &&
    localJwtoken !== "undefined" &&
    localJwtoken !== "null"
}


function authRoutess () {
    return  window.location.pathname == "/presets" ||
    window.location.pathname == ("/plants") ||
    window.location.pathname == ("/projects") ||
    window.location.pathname == ("/plantsai") ||
    window.location.pathname.includes("/projects/") ||
    window.location.pathname.includes("/plants/") ||
    window.location.pathname.includes("/plantsai/") ||
    window.location.pathname.includes("/settings") ||
    window.location.pathname.includes("/suggestions") ||
    window.location.pathname == ("/how-to-use-it") || 
    window.location.pathname ==("/waiting-confirmation") ||
    window.location.pathname == ("/filler") ||
    window.location.pathname == ("/admin-page")
}

function preauthRoutess () {
    return  window.location.pathname.includes("/login") ||
    window.location.pathname.includes("/signup") ||
    window.location.pathname.includes("/signup-step-2") ||
    window.location.pathname.includes("/update-password") || 

    window.location.pathname.includes("/confirm-user")
}

function nonauthRoutess () {
    return  window.location.pathname.includes("/") ||
    window.location.pathname.includes("/home") ||
    window.location.pathname.includes("/policy") ||
    window.location.pathname.includes("/our-mission")
}

const whereIam = {
    iAmOutOfImportantRoutes,
    isJwtokenExist,
    hideSidebar,
    homePages,
    authRoutes,
    authRoutess,
    preauthRoutess,
    nonauthRoutess,
    loginSignupPages
}

export default whereIam;