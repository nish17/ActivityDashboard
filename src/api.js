const URL = 'http://localhost:3001/members';

export default async function getData(setData, setIsLoading){
  try {
    setIsLoading(true);
    const response = await fetch(URL);
    const jsonData = await response.json();
    setData({ receivedData: jsonData, hasErrors: false });
    setIsLoading(false);
  } catch (e) {
    console.error('Something went wrong', e);
    setIsLoading(false);
    setData({ receivedData: [], hasErrors: true });
  }
}