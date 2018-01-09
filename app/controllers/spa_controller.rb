
class SpaController < ApplicationController
  def index
    js_env
  end
  def spa_route
    js_env({ route: "/#{params[:spa_route]}" })
    render :index
  end

  protected

  def js_env(values = {})
    @js_env = {
      
    }.merge(values).to_json
  end

end
