require 'rubygems'
require 'windy'
require 'awesome_print'
require 'data_mapper'
require './bike_rack'

api_token = ENV['CHICAGO_DATA_API_TOKEN']

if api_token.nil? || api_token.empty? {
  puts 'Requires CHICAGO_DATA_API_TOKEN to be set.'
  exit(false)
}

DataMapper::Logger.new($stdout, :debug)

DataMapper::setup(:default, ENV['TARGET_DB_CONN'] || "postgres://localhost:5432/chicago_db" )

DataMapper.finalize

dataset = 'cbyb-69xx'

Windy.app_token = ENV['CHICAGO_DATA_API_TOKEN']
view = Windy.views.find_by_id(dataset)

view.rows.each do |r|
  rack = BikeRack.first_or_create(
            :rackid => r.rackid, 
            :address => r.address,
            :ward => r.ward,
            :community_area => r.community_area,
            :community_name => r.community_name,
            :totinstall => r.totinstall,
            :latitude => r.latitude,
            :longitude => r.longitude,
            :historical => r.historical
          )
end
