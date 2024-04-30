import { useState, useEffect } from 'react';
import githubLogo from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import Button from '../components/Button';
import { api } from '../components/services/api';
import Card from '../components/Card';

function App() {

  
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])
  const [ allRepos, SetAllRepos] = useState([])

  function handleSearchRepo() {

    if(currentRepo){

      fetch(`https://api.github.com/repos/RafaelValiati/${currentRepo}` , {
        method:"GET",
        headers:{
          'Content-type': 'application/json'
        },
      })
      .then(resp => resp.json())
      .then((data) => {
        
        const exist = repos.find(repo => repo.id === data.id)
        
        if(!exist && data){
          setRepos(prevRepos => [...prevRepos,data])
          
        }
      }
    )
    } else {
      alert('Preencha corretamente o campo de pesquisa!')

      }


  }
  
  function SearchNameRepos(){

    fetch('https://api.github.com/users/RafaelValiati/repos' , {
      method: 'GET',
      headers:{
        'Content-type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then((data) =>{
      SetAllRepos(data)
    })
  }


  useEffect(()=> {
    console.log('oi')
    SearchNameRepos();
  }, [])

  return (
    <Container>
      <img src={githubLogo} width={72} height={72} alt='github logo'/>
      <Card allRepos={allRepos}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos && (repos.map((repo) => (
        <ItemRepo name={repo['name']} linkRepo={repo['html_url']}/>
      )))
      }
      
    </Container>
  );
}

export default App;
