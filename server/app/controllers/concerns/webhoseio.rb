# class Webhoseio
  
#   BASE_URL = "https://webhose.io/"
  
#   def initialize(token)
#     @next = ''
#     @token = '8ee5a647-e7bc-4bbd-be29-6805d0b99b6b'
#   end

#   def query(end_point_str, param_dict = {})
#     param_dict[:token] ||= @token
#     param_dict[:format] ||= 'json'
#     @next = URI::parse(BASE_URL + end_point_str + '?' + URI.encode_www_form(param_dict))
#     get_next
#   end

#   def get_next
#     response = Net::HTTP.get_response(@next)

#     unless response.kind_of? Net::HTTPSuccess
#       raise 'Server replied with status code ' + response.code
#     end

#     json = JSON.parse(response.body)
#     @next = URI::parse(BASE_URL + json['next'])
#     json
#   end
# end