import React, { useState, ChangeEvent, FormEvent } from "react";
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Container, 
  Paper,
  ThemeProvider,
  createTheme,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { Add as AddIcon, AttachFile as AttachFileIcon } from "@mui/icons-material";
import { addNotice } from "../../../api/admin";

interface InputType {
  title: string;
  content: string;
  img1: File[];
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // 검정색
    },
    background: {
      default: '#ffffff', // 흰색 배경
      paper: '#f5f5f5', // 연한 회색 (선택적)
    },
    text: {
      primary: '#000000', // 검정색 텍스트
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

const AdminAddNotice: React.FC = () => {
  const [input, setInput] = useState<InputType>({
    title: "",
    content: "",
    img1: []
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setInput(prev => ({ ...prev, img1: Array.from(e.target.files || []) }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await addNotice(input);
      console.log('공지사항이 성공적으로 추가되었습니다:', result);
      setInput({ title: "", content: "", img1: [] });
      // TODO: 성공 메시지 표시
    } catch (error) {
      console.error('공지사항 추가 실패:', error);
      // TODO: 오류 메시지 표시
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2, backgroundColor: 'background.paper' }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" fontWeight="bold">
              공지사항 추가
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="공지사항 제목"
                name="title"
                autoFocus
                value={input.title}
                onChange={handleInputChange}
                variant="outlined"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="content"
                label="내용"
                id="content"
                multiline
                rows={6}
                value={input.content}
                onChange={handleInputChange}
                variant="outlined"
              />
              <Button
                variant="outlined"
                component="label"
                startIcon={<AttachFileIcon />}
                sx={{ mt: 2, mb: 2 }}
              >
                파일 선택
                <input
                  type="file"
                  hidden
                  multiple
                  onChange={handleFileChange}
                />
              </Button>
              <List>
                {input.img1.map((file, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={file.name} />
                  </ListItem>
                ))}
              </List>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                startIcon={<AddIcon />}
              >
                공지사항 추가
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AdminAddNotice;