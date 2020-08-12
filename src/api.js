const URL = '/api/data.json'


export default async function getData(setData, setIsLoading){
  try {
    setIsLoading(true);
    const response = await fetch(URL);
    let jsonData = await response.json();
    setData({ receivedData: jsonData.members, hasErrors: false });
    setIsLoading(false);
  } catch (e) {
    console.error('Something went wrong', e);
    setIsLoading(false);
    setData({ receivedData: [], hasErrors: true });
  }
}