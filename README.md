# Toyota Website Fan Project

Personal website project for applying web development concepts.
Done using raw HTML, CSS and NodeJS backend.
Server configured with Nginx and deployed on a raspberry pi.

For deployment make sure you have:

- `.env` file with your port
- A TLS certificate
- A domain address
- `server.js` running


```bash
cp deploy/nginx/toyota-fan-site.conf /etc/nginx/sites-available/
ln /etc/nginx/sites-available/toyota-fan-site.conf /etc/nginx/sites-enabled/

sudo nginx -t
sudo systemctl reload nginx
```
