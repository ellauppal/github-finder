import React, { Component }from 'react';
import './App.css';
import Navbar from './component/layout/Navbar';
import Users from './component/users/User';
import axios from 'axios';
import Search from './component/users/Search';
import Alert from './component/layout/Alert';

class App extends Component {
    // state is an object
    state = {
      users: [],
      loading: false, // for while data is being fetched 
      alert: null
    };

    // Search Github users function
    searchUsers = async text =>{
        this.setState({loading:true})

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        
        this.setState({ users: res.data.items, loading: false});
      }

      // Clear users from state
      clearUsers = () => this.setState({ users: [], loading: false});
      
      // Set Alert
      setAlert = (msg, type) => {
          this.setState({alert: {msg: msg, type: type}});

          setTimeout( () => this.setState({alert:null}), 5000);
      }

  render(){   //required lifecycle method

    const {users, loading, alert} = this.state;

    return (
      <div className='App'>
      <Navbar /> 
        <div className='container'>
          <Alert alert={alert} />
          <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert} />
          <Users 
            loading={loading} 
            users={users}/>
        </div>
    </div>
    );
  }
}  

// line 11 can pass a prop by adding: title="Github Finder" icon="fab fa-github" after  Navbar

export default App;
