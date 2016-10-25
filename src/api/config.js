/**
 * Created by yelingfeng on 2016/10/25.
 */
export const API_ROOT = (process.env.NODE_ENV === 'production')
  ?'http://localhost:8080/cubp-platform-pdfactory-web/'
  :'http://localhost:8400'