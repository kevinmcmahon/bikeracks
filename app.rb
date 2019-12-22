require 'rubygems'
require 'sinatra'
require 'data_mapper'
require 'haml'
require 'geocoder'
require 'awesome_print'

# Helpers

Dir["lib/**/*.rb"].each {|f| require "./#{f}"}


# Allow rendering of partials. See: https://gist.github.com/119874
helpers Sinatra::Partials

configure { 
  # Set Sinatra variables
  set :server, :puma 
  set :app_file, __FILE__
  set :root, File.dirname(__FILE__)
  set :views, 'views'
  set :public_folder, 'public'
  set :haml, {:format => :html5} # default Haml format is :xhtml
}

configure :production do
  set :haml, { :ugly => true }
end

#
# Helpers
#
helpers do
  include Rack::Utils
  alias_method :h, :escape_html
  def create_markers(array)
      js = "var markers = [\n"
      array.each do |i|
        js << "{ lat: #{i['latitude']}, lng: #{i['longitude']}, name: '#{i['address']}' },\n"
      end
      js << "];\n"
      js
    end
end

#
# Routes
#

not_found do
  haml :fourohfour, :layout => :'layouts/application'
end

get '/' do
  haml :index, :layout => :'layouts/application'
end

get '/about' do
  haml :about, :layout => :'layouts/application'
end

get '/findracks' do
  @lat = 0.0
  @lng = 0.0
  if(!params['lat'].nil? && !params['lng'].nil?)
    @lat = params['lat']
    @lng = params['lng']
  elsif (!params['address'].nil?)
    result = Geocoder.search(params['address'])
    ap result
    @lat = result[0].latitude
    @lng = result[0].longitude
  end

  @racks = RackFinder.find_racks(@lat,@lng,5)
  haml :racks, :layout => :'layouts/map'
end

get '/location/:id?' do
  @rack = RackFinder.find_rack(params['id'])
  haml :rackdetail, :layout => :'layouts/mapdetail'
end
