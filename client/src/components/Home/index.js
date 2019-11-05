import React, { useReducer } from 'react';
import './Home.css';
import Header from '../../views'
import RepoList from '../RepoList';
import axios from 'axios'

const initialState = { username: '', list: [], feedback: '', sortDescending: true };

function reducer(state, action) {
  switch (action.type) {
    case 'updateState':
      return { ...state, username: action.data }
    case 'updateList':
      return { ...state, list: action.data }
    case 'updateFeedback':
      return { ...state, feedback: action.data }
    case 'toggleSort':
      return { ...state, sortDescending: !state.sortDescending }
    case 'reset':
      return { ...state, username: '', feedback: '' }
    default:
      throw new Error();
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const searchRepo = async () => {
    if (!state.username) {
      dispatch({ type: 'updateFeedback', data: 'You must enter an username!' })
      return
    }
    dispatch({ type: 'reset' })
    let res = await axios.get('https://api.github.com/users/' + state.username + '/repos');
    console.log(res)
    dispatch({ type: 'updateList', data: res.data.sort((a, b) => b.stargazers_count - a.stargazers_count) })
  }

  const reverseSort = () => {
    dispatch({ type: 'toggleSort' })
    if (state.list && state.list.length > 0)
      dispatch({ type: 'updateList', data: state.list.reverse() })
  }

  return (
    <div className="Home">
      <Header />
      <div className="search-wrapper focused searchBar container">
        <input
          id="search"
          placeholder="Search"
          value={state.username}
          onChange={e => dispatch({ type: 'updateState', data: e.target.value })}
          onKeyDown={e => e.keyCode === 13 ? searchRepo() : null}
        />
        <i className="material-icons" onClick={searchRepo}>search</i>
        <i className="material-icons" onClick={reverseSort} tooltip='Sort by stars'>{state.sortDescending ? 'arrow_downward' : 'arrow_upward'}</i>
      </div>
      {state.feedback && <p className='container red-text accent-4 center-align'>{state.feedback}</p>}
      <RepoList list={state.list} />
    </div>
  );
}

export default Home;
