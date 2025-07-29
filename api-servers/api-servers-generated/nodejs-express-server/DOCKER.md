# 🐳 Docker Setup for JairoJobs API

This document provides comprehensive instructions for running the JairoJobs API using Docker.

## 📋 **Prerequisites**

- Docker Engine 20.10+
- Docker Compose 2.0+
- At least 2GB of available RAM
- 10GB of available disk space

## 🚀 **Quick Start**

### **Production Environment**

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f api

# Stop all services
docker-compose down
```

### **Development Environment**

```bash
# Start with development profile
docker-compose --profile dev up -d

# View logs for development
docker-compose logs -f api-dev

# Stop development services
docker-compose --profile dev down
```

## 🏗️ **Architecture**

### **Services**

1. **API Service** (`jairojobs-api`)
   - Express.js application
   - Port: 4010
   - Health check endpoint: `/hello`

2. **Database Service** (`jairojobs-db`)
   - PostgreSQL 15
   - Port: 5432
   - Database: `jairojobs`
   - User: `jairojobs_user`
   - Password: `jairojobs_pass`

### **Volumes**

- `postgres_data`: Persistent PostgreSQL data
- `./logs`: Application logs
- `./uploaded_files`: File uploads

## 🔧 **Configuration**

### **Environment Variables**

| Variable | Default | Description |
|----------|---------|-------------|
| `NODE_ENV` | `production` | Node.js environment |
| `PORT` | `4010` | API server port |
| `DATABASE_URL` | `postgresql://jairojobs_user:jairojobs_pass@db:5432/jairojobs` | Database connection string |

### **Database Configuration**

```yaml
POSTGRES_DB: jairojobs
POSTGRES_USER: jairojobs_user
POSTGRES_PASSWORD: jairojobs_pass
```

## 📦 **Docker Images**

### **Production Image**
- **Base**: `node:18-alpine`
- **Size**: ~150MB
- **Security**: Non-root user
- **Optimization**: Multi-stage build

### **Development Image**
- **Base**: `node:18-alpine`
- **Size**: ~200MB
- **Features**: Hot reload, dev dependencies

## 🛠️ **Build Commands**

### **Production Build**

```bash
# Build production image
docker build -t jairojobs-api:latest .

# Build with specific target
docker build --target production -t jairojobs-api:prod .
```

### **Development Build**

```bash
# Build development image
docker build -f Dockerfile.dev -t jairojobs-api:dev .

# Build with builder target
docker build --target builder -t jairojobs-api:builder .
```

## 🧪 **Testing**

### **Health Checks**

```bash
# Check API health
curl http://localhost:4010/hello

# Check database health
docker-compose exec db pg_isready -U jairojobs_user -d jairojobs
```

### **API Testing**

```bash
# Test API endpoints
curl -H "X-API-Key: test-key" http://localhost:4010/v1/jobs

# Test with parameters
curl -H "X-API-Key: test-key" "http://localhost:4010/v1/jobs?q=developer&page=1&limit=10"
```

## 🔍 **Monitoring**

### **Container Logs**

```bash
# View all logs
docker-compose logs

# Follow API logs
docker-compose logs -f api

# Follow database logs
docker-compose logs -f db
```

### **Container Status**

```bash
# Check container status
docker-compose ps

# Check resource usage
docker stats
```

## 🗄️ **Database Management**

### **Database Access**

```bash
# Connect to database
docker-compose exec db psql -U jairojobs_user -d jairojobs

# Backup database
docker-compose exec db pg_dump -U jairojobs_user jairojobs > backup.sql

# Restore database
docker-compose exec -T db psql -U jairojobs_user -d jairojobs < backup.sql
```

### **Database Initialization**

The database is automatically initialized with:
- Required extensions (`uuid-ossp`, `pg_trgm`, `btree_gin`)
- Enum types (`job_type`, `experience_level`, `remote_option`)
- Audit trigger function

## 🔧 **Troubleshooting**

### **Common Issues**

1. **Port Already in Use**
   ```bash
   # Check what's using the port
   lsof -i :4010
   
   # Stop conflicting service
   sudo kill -9 <PID>
   ```

2. **Database Connection Issues**
   ```bash
   # Check database status
   docker-compose exec db pg_isready
   
   # Restart database
   docker-compose restart db
   ```

3. **Permission Issues**
   ```bash
   # Fix volume permissions
   sudo chown -R $USER:$USER ./logs ./uploaded_files
   ```

### **Debug Commands**

```bash
# Enter API container
docker-compose exec api sh

# Enter database container
docker-compose exec db psql -U jairojobs_user -d jairojobs

# View container details
docker-compose exec api cat /etc/passwd
```

## 📊 **Performance**

### **Resource Requirements**

- **API Container**: 512MB RAM, 1 CPU
- **Database Container**: 1GB RAM, 1 CPU
- **Total**: 1.5GB RAM, 2 CPU cores

### **Optimization Tips**

1. **Use Alpine Images**: Smaller footprint
2. **Multi-stage Builds**: Reduce final image size
3. **Volume Mounts**: Persistent data storage
4. **Health Checks**: Automatic container monitoring

## 🔒 **Security**

### **Security Features**

- Non-root user in containers
- Read-only filesystem where possible
- Health checks for monitoring
- Environment variable configuration
- Network isolation

### **Best Practices**

1. **Never run as root**
2. **Use specific image tags**
3. **Scan images for vulnerabilities**
4. **Keep base images updated**
5. **Use secrets for sensitive data**

## 📚 **Additional Resources**

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Node.js Docker Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [PostgreSQL Docker Image](https://hub.docker.com/_/postgres)

## 🤝 **Support**

For Docker-related issues:
1. Check container logs: `docker-compose logs`
2. Verify configuration: `docker-compose config`
3. Restart services: `docker-compose restart`
4. Rebuild images: `docker-compose build --no-cache` 