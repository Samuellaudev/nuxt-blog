import config from '@/config/index'

// Use simple config call
// Use module if multiple environments is required
export default ({ app }, inject) => {
  inject('config', config)
}
