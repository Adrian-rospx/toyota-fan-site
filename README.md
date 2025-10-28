# Toyota Website Fan Project

Personal website project for applying web development concepts.
Done using raw HTML, CSS and NodeJS backend.
Server configured with Nginx and deployed on a raspberry pi.

![Website picture](images/website1.png)

Run with docker:

```bash
docker compose up
```

For deployment, make sure you have a `.env` file with your PORT variable

```bash
cp deploy/nginx/car-site.conf /etc/nginx/sites-available/
ln /etc/nginx/sites-available/car-site.conf /etc/nginx/sites-enabled/

sudo nginx -t
sudo systemctl reload nginx
```
