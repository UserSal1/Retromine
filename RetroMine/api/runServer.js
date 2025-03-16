const { exec } = require('child_process');

export default function handler(req, res) {
  exec('java -jar server.jar', { cwd: './' }, (err, stdout, stderr) => {
    if (err) {
      res.status(500).send(`Error: ${stderr}`);
      return;
    }
    res.status(200).send(`Server started: ${stdout}`);
  });
}
