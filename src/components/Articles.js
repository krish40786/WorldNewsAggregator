import { func } from 'prop-types';
import React from 'react'
import ArticleRow from './ArticleRow'

const Articles = (props) => {
    /* Noisy Console.log statements
    for (const item of props.items) {
        console.log("Title:", item.getElementsByTagName("title")[0].innerHTML);
        console.log("Link:", item.getElementsByTagName("link")[0].innerHTML);
        console.log("Description:", item.getElementsByTagName("description")[0].innerHTML);
        console.log("Source URL:", item.getElementsByTagName("source")[0].getAttribute("url"));
        console.log("Source: ", props.items[0].getElementsByTagName("source")[0].innerHTML); 
    } */

    let articlesDisplayed = 0;  // Limit the number of articles displayed based on props.numArticlesPreferred
    let articlesToCurrArtIndex = props.currentArticleIndex;
    const rows = []
    for (const item of props.items) {
        if (articlesDisplayed >= props.numArticlesPreferred) {
            break;
        } else if (articlesToCurrArtIndex > 0) {
            articlesToCurrArtIndex -= 1;
            continue;
        }
        articlesDisplayed += 1;
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

    console.log("Total number of items:", props.items.length);
    console.log("Number of items displayed:", articlesDisplayed);

    return(
        <div className='component-articles'>
            {rows}
        </div>
    );


}

export default Articles