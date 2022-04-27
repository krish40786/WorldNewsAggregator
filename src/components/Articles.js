import React from 'react'
import ArticleRow from './ArticleRow'

const Articles = (props) => {
    props.items.foreach(item => {
        console.log(item.querySelector("title").innerHTML);
        console.log(item.querySelector("link").innerHTML);
        console.log(item.querySelector("description").innerHTML);
        console.log(item.querySelector("source url").innerHTML);
    });

    return(
        <div className='component-articles'>
            {props.items.map(item => (
                <ArticleRow
                    title = {item.querySelector("title").innerHTML}
                    link = {item.querySelector("link").innerHTML}
                    description = {item.querySelector("description").innerHTML}
                    source_url = {item.querySelector("source url").innerHTML}
                />
            ))}
        </div>
    );

}

export default Articles