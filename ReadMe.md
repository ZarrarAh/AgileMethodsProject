# Kleda Dashboard

Full-stack dashboard applikasjon for klesbutikker.

## Forutsetninger

- Java 17+
- Maven 3.8+
- Node.js 18+
- npm

## Installasjon

### Backend
```bash
cd Backend
mvn clean install
```

### Frontend
```bash
cd frontend
npm install
```

## Kjøring

### 1. Start Backend (Terminal 1)
```bash
cd Backend
mvn spring-boot:run
```
Backend kjører nå på: **http://localhost:8080**

### 2. Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```
Frontend kjører nå på: **http://localhost:3000**

### 3. Åpne Applikasjonen

Gå til: **http://localhost:3000**

## Teknologier

**Frontend:** React, TypeScript, Tailwind CSS, Vitest  
**Backend:** Spring Boot, Spring Data JPA  
**Database:** H2 (in-memory)

## API Endpoints

- `GET /api/metrics` - Hent metrics
- `GET /api/products/top` - Hent top produkter
- `GET /api/insights` - Hent insights
- `GET /api/time-series` - Hent tidsseriedata
- `GET /api/heatmap` - Hent heatmap data
- `GET /api/dashboard` - Hent komplett dashboard

## H2 Database Console

URL: **http://localhost:8080/h2-console**  
JDBC URL: `jdbc:h2:mem:kledadb`  
Username: `sa`  
Password: *(tom)*

## Testing

### Frontend Testing (Vitest)
```bash
cd frontend

# Kjør alle tester
npm test

# Kjør med coverage
npm run test:coverage

# Watch mode
npm run test:watch
```



## Troubleshooting

**Port 8080 allerede i bruk:**
```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:8080 | xargs kill -9
```

**CORS error:**
- Sjekk at backend kjører på port 8080
- Sjekk at frontend kjører på port 3000

**Moduler mangler:**
```bash
cd frontend
npm install
```

## Team

Team SUZHOU - PRO203 Høyskolen Kristiania

