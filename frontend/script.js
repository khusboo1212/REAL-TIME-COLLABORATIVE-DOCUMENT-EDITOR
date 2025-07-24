const socket = io();
const editor = new Quill('#editor', { theme: 'snow' });

const documentId = location.hash.substring(1) || 'default-doc';
socket.emit('get-document', documentId);

editor.on('text-change', (delta, oldDelta, source) => {
  if (source !== 'user') return;
  socket.emit('send-changes', delta);
});

socket.on('receive-changes', delta => {
  editor.updateContents(delta);
});

socket.on('load-document', data => {
  editor.setContents(data);
  editor.enable();
});

setInterval(() => {
  socket.emit('save-document', editor.getContents());
}, 2000);
