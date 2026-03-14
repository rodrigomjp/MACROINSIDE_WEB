# Despliegue y rutas (evitar 404 en /privacidad, etc.)

Si al abrir directamente una URL como `https://www.macroinside.com/privacidad` ves **404**, el servidor no está devolviendo `index.html` para esas rutas. El proyecto ya incluye:

- **`public/.htaccess`** → para Apache (se copia a `build/` al hacer `npm run build`).
- **`public/_redirects`** → para Netlify.
- **`public/vercel.json`** → para Vercel.

## Si usas Apache

1. Asegúrate de **subir el archivo `.htaccess`** dentro de `build/` (muchos clientes FTP ocultan archivos que empiezan por punto; activa “mostrar archivos ocultos” o sube solo ese archivo a la raíz del sitio).
2. El servidor debe tener **mod_rewrite** activado y **AllowOverride** permitido para ese directorio. Si no, el hosting debe activarlo (a veces desde cPanel o pidiendo soporte).

## Si usas Nginx

En el `server` que sirve el sitio, en el `location /` (o el que corresponda), usa algo así:

```nginx
location / {
  root   /ruta/a/tu/build;
  try_files $uri $uri/ /index.html;
}
```

Luego recarga Nginx: `sudo nginx -s reload`.

## Después de cambiar la configuración

1. Vuelve a generar el build: `npm run build`.
2. Sube todo el contenido de la carpeta `build/` (incluido `.htaccess` si usas Apache).
