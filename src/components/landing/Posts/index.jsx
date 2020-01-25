import {Container, Item, ProjectGrid} from 'Common';
import React, {useEffect, useState} from 'react';
import {Card, Content, Wrapper} from '../Portfolio/styles';
import {Image, ImageWrapper} from './styles';

const info = require('../../../../data/info');
const fetchUrl = 'https://dev.to/api/articles?username=timrodz';

export const Posts = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    async function fetchDevData() {
      const response = await fetch(fetchUrl);
      response
        .json()
        .then(res => setPostData(res))
        .catch(err => console.log(err));
    }

    fetchDevData();
  }, []);

  const renderPosts = () => {
    if (!postData || postData.length === 0) return null;

    const slicedPosts = postData.slice(0, info.maxPostsToShow);

    return slicedPosts.map(post => {
      const id = post['id'];
      const title = post['title'];
      const url = post['url'];
      const imgUrl = post['social_image'];
      const timestamp = post['published_timestamp'];
      const date = new Date(timestamp).toDateString().slice(4);

      return (
        <Item key={id} as="a" href={url} target="_blank" rel="noopener noreferrer">
          <Card>
            <Content>
              <ImageWrapper>
                <Image loading="lazy" src={imgUrl} alt={`${title}`} />
              </ImageWrapper>
              <h4>{title}</h4>
              <p>{date}</p>
            </Content>
          </Card>
        </Item>
      );
    });
  };

  return (
    <Wrapper as={Container} id="posts">
      <h2>Blog Posts</h2>
      <p>{info.posts}</p>
      <ProjectGrid>{renderPosts()}</ProjectGrid>
    </Wrapper>
  );
};
