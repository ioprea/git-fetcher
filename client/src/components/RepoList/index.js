import React from 'react'
import './RepoList.css'

const RepoList = (props) => {
    return (
        <div>
            {props.list.length > 0 && <ul className='collection container'>
                {props.list.slice(0, 10).map((repo, index) => {
                    return <li key={index} className='collection-item'>
                        <p>{`${repo.full_name}`}</p>
                        <p>{`Stars 🌟️:${repo.stargazers_count}`}</p>
                    </li>
                })}
            </ul>}
        </div>
    )
}

export default RepoList