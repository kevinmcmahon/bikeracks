require 'open-uri'
require 'json'
require 'pp'

module RackFinder  
  def self.find_racks(lat,lng,numberOfRacks)
    request_uri = 'https://bh4i9yrgt9.execute-api.us-west-2.amazonaws.com/Prod/bikeracks'
    request_query = "?lat=#{lat}&lng=#{lng}"
    url = "#{request_uri}#{request_query}"

    buffer = open(url).read
    result = JSON.parse(buffer)
  end

  def self.find_rack(rackid)
    puts rackid
    request_uri = "https://bh4i9yrgt9.execute-api.us-west-2.amazonaws.com/Prod/bikeracks/#{rackid}"
    request_query = ""
    url = "#{request_uri}#{request_query}"

    buffer = open(url).read
    result = JSON.parse(buffer)
  end

end
