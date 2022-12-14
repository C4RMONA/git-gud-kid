import decode from 'jwt-decode';

class AuthService {
  // retrieve data saved in token
  getProfile() {
    return decode(this.getToken());
  }

  // check if the user is still logged in
  loggedIn() {
    // checks if there is a saved token and if it's still valid
    const token = this.getToken();
    
    // use type coersion to check if token is NOT undefined and the token is NOT expired
    return !!token && !this.isTokenExpired(token);
  }

  // checks if token has expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  // set token to localStorage and reload page to homepage
  login(idToken) {

    // saves user token to localStorage
    localStorage.setItem('id_token', idToken)

    window.location.assign('/dashboard')
  }

  // clear token from localstorage and force logout with reload
  logout() {
    // clear upser token and profile data from localstorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
  
  renderlogin() {
    setTimeout(window.location.assign('login'), 50000)
  }
}

export default new AuthService();