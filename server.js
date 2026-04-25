const http=require('http'),fs=require('fs'),path=require('path'),url=require('url');
http.createServer((req,res)=>{
  const parsed=url.parse(req.url);
  const p=parsed.pathname;
  if(p==='/admin'){res.writeHead(302,{Location:'/?admin'});res.end();return;}
  let f=path.join(__dirname,p==='/'?'index.html':p.slice(1));
  try{
    const d=fs.readFileSync(f);
    const ext=path.extname(f).slice(1);
    const ct={html:'text/html',css:'text/css',js:'application/javascript',png:'image/png',jpg:'image/jpeg',jpeg:'image/jpeg',gif:'image/gif',svg:'image/svg+xml',ico:'image/x-icon',webp:'image/webp'}[ext]||'text/plain';
    res.writeHead(200,{'Content-Type':ct+';charset=utf-8'});
    res.end(d);
  }catch{
    res.writeHead(404);res.end('Not found');
  }
}).listen(3000,()=>console.log('Servidor rodando em http://localhost:3000'));
