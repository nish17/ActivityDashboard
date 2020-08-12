let URL;
if(process.env.NODE_ENV==='production'){
  URL = '/data.json';
}
else URL = 'http://localhost:3001/members';


export default async function getData(setData, setIsLoading){
  try {
    setIsLoading(true);
    const response = await fetch(URL);
    let jsonData = await response.json();
    if(process.env.NODE_ENV === 'production'){
      jsonData = jsonData.members;
    }
    setData({ receivedData: jsonData, hasErrors: false });
    setIsLoading(false);
  } catch (e) {
    console.error('Something went wrong', e);
    setIsLoading(false);
    setData({ receivedData: [], hasErrors: true });
  }
}