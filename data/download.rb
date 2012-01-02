require 'rubygems'
require 'windy'
require 'awesome_print'
require 'data_mapper'
require './bike_rack'

DataMapper::Logger.new($stdout, :debug)
DataMapper::setup(:default,"postgres://kmcmahon:0c791fd488@beta.spacialdb.com:9999/spacialdb_1321928742fe_kmcmahon")
DataMapper.finalize

dataset = 'cbyb-69xx'

Windy.app_token = 'LNK07KanQSRmYhO1SHHA3Kgq9'
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