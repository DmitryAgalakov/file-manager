import './App.css';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { Explorer } from './components/Explorer/Explorer';

function App() {
  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    console.log('files: ', files);
  };

  return (
    <Stack
      sx={{
        backgroundColor: '#282c34',
        minHeight: '100vh',
        flexDirection: 'row',
      }}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <Stack sx={{ width: '500px', height: '100vh', borderRight: '1px solid #2b5073', mr: '100px' }}>
        <Explorer />
      </Stack>
      <Stack sx={{ mt: '200px' }}>
        <Stack
          onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
          onDrop={(e: React.DragEvent<HTMLDivElement>) => drop(e)}
          id='dropzone'
          sx={{
            width: '300px',
            height: '100px',
            top: 0,
            border: '2px solid #437eb4',
            borderRadius: '8px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AddIcon fontSize='medium' sx={{ color: '#5eb2ff', mr: '4px' }} />
          <Typography sx={{ color: '#5eb2ff' }}>Перетяните файлы для загрузки</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
