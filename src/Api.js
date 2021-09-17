import axios from 'axios';

export const getData= async(page)=>{
    try {
        const res = await axios({
          method: 'GET',
          url: `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`,
          data: '',
          headers: { 'Content-Type': 'application/json' }
        })
  
        return res
    } catch (error) {
        console.log(error.response);
      }
}