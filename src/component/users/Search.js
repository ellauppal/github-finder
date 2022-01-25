//rce
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {
    state={
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired
    }

    //onCHange method
    // takes in event parameter
    onChange= e => this.setState({ [e.target.name]: e.target.value});
        // if there were multiple user input fields we can just put [e.target.name]
        // accessing what is typed in from event parameter

    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please enter something', 'light')    
        }
        else{
            this.props.searchUsers(this.state.text)     
            this.setState({text: ''}) // clearing form
        }
    }

    render() {

        // pulling out values from this.props
        const {clearUsers, showClear} = this.props;


        return (
            <div>
                <form onSubmit={this.onSubmit}className='form'>
                    <input 
                        type='text' 
                        name='text' 
                        placeholder='Search Users...'
                        value={this.state.text} 
                        onChange={this.onChange}
                        />
                    
                    <input 
                        type='submit' 
                        value='Search' 
                        className='btn btn-dark btn-block'/>
                </form>

                {showClear && ( //if showClear is true
                <button 
                    className='btn btn-light btn-block' 
                    onClick={clearUsers}>Clear
                </button>
                )}

            </div>
        )
    }
}



export default Search
