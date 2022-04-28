import { func } from 'prop-types';
import React from 'react'
import ArticleRow from './ArticleRow'

const Articles = (props) => {
    for (const item of props.items) {
    //     console.log("Title:", item.getElementsByTagName("title")[0].innerHTML);
    //     console.log("Link:", item.getElementsByTagName("link")[0].innerHTML);
    //     console.log("Description:", item.getElementsByTagName("description")[0].innerHTML);
    // console.log("Source URL:", item.getElementsByTagName("source")[0].getAttribute("url"));
    //     console.log("Source: ", props.items[0].getElementsByTagName("source")[0].innerHTML); 
    }

    const rows = []
    for (const item of props.items) {
        rows.push(
        <ArticleRow
            key = {rows.length}
            title = {item.getElementsByTagName("title")[0].innerHTML}
            link = {item.getElementsByTagName("link")[0].innerHTML}
            description = {item.getElementsByTagName("description")[0].innerHTML}
            source_url = {item.getElementsByTagName("source")[0].getAttribute("url")}
            source = {item.getElementsByTagName("source")[0].innerHTML}
        />
        );
    }

    return(
        <div className='component-articles'>
            {rows}
        </div>
    );


}

export default Articles