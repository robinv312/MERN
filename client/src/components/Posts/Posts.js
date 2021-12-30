import React from 'react';
import useStyles from './styles';

import Post from './Post/post'

const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts;