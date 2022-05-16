export default class TweetService {

  constructor(baseURL) {
    this.baseURL = baseURL
  }


  async getTweets(username) {
    const query = username? `username=${username}` : '';
    const response = await fetch(`${this.baseURL}/tweets${query}`, {
      method : 'GET',
      headers : {'content-Type' : 'application/json'},
    });
    const data = await response.json();
    if(response.status !== 200) {
      throw new Error();
    }
    return data;
  }

  async postTweet(text) {
    const response = await fetch(`${this.baseURL}/tweets`, {
      method : 'POST',
      headers : {'content-Type' : 'application/json'},
      body : JSON.stringify({text, username : 'jieun', name: 'jieun'}),
    });
    const data = await response.json();
    if(response.status !== 200) {
      throw new Error();
    }
    return data;
  }
  

  async deleteTweet(tweetId) {
    const response = await fetch(`${this.baseURL}/tweets${tweetId}`, {
      method : 'DELETE',
      headers : {'content-Type' : 'application/json'},
    });
    if(response.status !== 204) {
      throw new Error();
    }
  }

  async updateTweet(tweetId, text) {
    const response = await fetch(`${this.baseURL}/tweets${tweetId}`, {
      method : 'PUT',
      headers : {'content-Type' : 'application/json'},
      body : JSON.stringify({text}),
    });
    const data = await response.json();
    if(response.status !== 200) {
      throw new Error();
    }
    return data;
}

}