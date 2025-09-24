## FiveM Web

Next.js 14, TypeScript ve Tailwind ile FiveM sunucusu için web sitesi altyapısı.

### Başlangıç

1. Bağımlılıkları kurun:

```bash
npm ci
```

2. Ortam değişkenlerini kopyalayın ve doldurun:

```bash
cp .env.example .env
```

3. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Docker ile çalıştırmak için:

```bash
docker compose up -d
```

### Çevre Değişkenleri
- `FIVEM_HOST`: `ip:port` formatında FiveM host
- `NEXT_PUBLIC_TEBEX_URL`, `NEXT_PUBLIC_DISCORD_INVITE`, `NEXT_PUBLIC_CONTACT_EMAIL`

### API
- `GET /api/status` – FiveM sunucu durumunu döner

