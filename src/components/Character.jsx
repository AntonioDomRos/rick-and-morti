import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

function Character({character}) {
  return (
    <Card sx={{maxWidth:'100%', margin:'20px', backgroundColor:'#f5f5f5'}}>
      <CardMedia><img src={character.image} height='300px' width='100%'/></CardMedia>
      <div className='p-3'>
        <h2>{character.name}</h2>
          <h5 className="card-title">Status: {character.status}</h5>
          Origin: {character.origin.name}
      </div>  
    </Card>
  )
}

export default Character