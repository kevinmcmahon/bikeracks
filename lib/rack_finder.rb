require 'rubygems'
require 'data_mapper'

module RackFinder  
  def self.find_racks(lat,lng,numberOfRacks)
    sql = 
    "SELECT 
    ROUND(CAST (ST_Distance(ST_Transform(ST_GeomFromText('POINT(#{lng} #{lat})', 4326),900913),ST_Transform(bike_racks.geom,900913)) / 1609 AS numeric),2) AS dist,
    bike_racks.id AS id,
    bike_racks.rackid AS rack_id,
    bike_racks.address AS address,
    bike_racks.ward AS ward,
    bike_racks.community_name AS neighborhood,
    bike_racks.latitude,
    bike_racks.longitude
    FROM bike_racks 
    ORDER BY dist ASC
    LIMIT #{numberOfRacks};"

    DataMapper.repository(:default).adapter.select sql
  end
end
