module.exports = {
  apps: [
    {
      name: 'kreativhaus77',
      script: 'npm',
      args: 'start',
      cwd: './',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3005
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3005
      },
      // Configurações de logs
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      
      // Configurações de restart
      max_memory_restart: '1G',
      restart_delay: 4000,
      
      // Configurações de watch (desabilitado em produção)
      watch: false
    }
  ]
}


