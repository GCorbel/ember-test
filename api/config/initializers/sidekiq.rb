sidekiq_redis_conf = {
  url: 'redis://redis:6379/0'
}

Sidekiq.configure_client do |config|
  config.redis = sidekiq_redis_conf
end

Sidekiq.configure_server do |config|
  config.redis = sidekiq_redis_conf
end
