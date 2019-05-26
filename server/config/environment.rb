# Load the Rails application.
require_relative 'application'
require 'ibm_watson'
require 'ibm_watson/discovery_v1'
require 'open-uri'
require 'json'
require 'net/https'
# require_relative "../app/controllers/concerns/webhoseio.rb"

# Initialize the Rails application.
Rails.application.initialize!

