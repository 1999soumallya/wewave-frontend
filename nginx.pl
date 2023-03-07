server {
    listen 80;
    listen [::]:80;
    root /home/ubuntu/wewave-frontend/build/;
    location / {
        try_files $url /index.html;
    }
}