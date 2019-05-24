# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

discovery = IBMWatson::DiscoveryV1.new(
   version: "2019-03-25",
   iam_apikey: "uPnTw29CxEWN4QWzAcolHvzx_DDXsiLYVkYTyFqMzpLB",
   url:"https://gateway-lon.watsonplatform.net/discovery/api"
 )