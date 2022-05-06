import { func } from 'prop-types';
import React, { useState, useEffect } from 'react'
import ArticleRow from './ArticleRow'
import axios from 'axios'
import ReactDOM from 'react-dom';
import App from '../App';

const Articles = (props) => {
    /*for (const item of props.items) {
    //     console.log("Title:", item.getElementsByTagName("title")[0].innerHTML);
    //     console.log("Link:", item.getElementsByTagName("link")[0].innerHTML);
    //     console.log("Description:", item.getElementsByTagName("description")[0].innerHTML);
    // console.log("Source URL:", item.getElementsByTagName("source")[0].getAttribute("url"));
    //     console.log("Source: ", props.items[0].getElementsByTagName("source")[0].innerHTML); 
    }*/
    const rows = []
    console.log("rows", rows.length)
    const [actualRows , setActualRows] = useState([])
    var totalItShouldBe = props.items.length
    let articlesDisplayed = 0
    let articlesToCurrArtIndex = props.currentArticleIndex
    console.log("current article index", props.currentArticleIndex)

    useEffect(() => {    
    for (const item of props.items) {
        if(articlesDisplayed >= props.numArticlesPreferred){ 
            break;
        } else if(articlesToCurrArtIndex > 0) {
            articlesToCurrArtIndex -= 1
            continue;
        }
        articlesDisplayed += 1

        const siteName = item.getElementsByTagName("source")[0].innerHTML
        var picLink
        console.log("it reached here")
        var getRequestPromise = axios.get(`http://localhost:5000/site/${siteName}`)
        getRequestPromise.then(response => {
            if(response.data == null){
                var googleGetRequestPromise = axios.get(`https://www.googleapis.com/customsearch/v1?key=AIzaSyA3AaU03PcczCRvqdAGzJ-71UfeuD9Anfk&searchType=image&cx=f4372977ac173d7f5&q=${siteName}&num=1`)
                googleGetRequestPromise.then(response => {
                    picLink = response.data.items[0].link
                    const postrequest = {
                        site: siteName, link: picLink
                      }
                      var postpromise  = axios.post("http://localhost:5000/site/add", postrequest)
                      postpromise.then(response => {
                        console.log(postpromise)
                      })
                })
                .catch(function(error){
                    totalItShouldBe = totalItShouldBe - 1;
                    console.log(error.message)
                })

            } else {
                picLink = response.data.picLink
            }
            
            rows.push(
                <ArticleRow
                    key = {rows.length}
                    title = {item.getElementsByTagName("title")[0].innerHTML}
                    link = {item.getElementsByTagName("link")[0].innerHTML}
                    description = {item.getElementsByTagName("description")[0].innerHTML}
                    source_url = {item.getElementsByTagName("source")[0].getAttribute("url")}
                    source = {item.getElementsByTagName("source")[0].innerHTML}
                    imgSource = {picLink}
                />
            )
            console.log("it calls article row", picLink)
            
            if(rows.length == props.numArticlesPreferred){
                console.log("item", props.items.length)
                console.log(rows)
                setActualRows(rows)

                /*ReactDOM.render(
                    rows,
                    (document.getElementById('root')).getElementById('herepls')
                  )*/
            }
        })
        .catch(function (error){
                console.log(error.message)
        })
    }}, [])
    console.log("it has reached here")
    

    //if(rows.length != props.items.length){
      //  return <div>Loading...</div>
    //} else {
        //console.log("iit hass finally come here")
        console.log(rows.length)
       
    //}
    return actualRows


}

export default Articles