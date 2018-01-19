class ClientController < ApplicationController
  def new
    client = Client.create(
      name: params[:name],
      email: params[:email],
      website: params[:website],
      android: params[:android],
      windows: params[:windows],
      other: params[:other],
      description: params[:description]
    )
  end

  def list
    render json: Client.all
  end

  def destroy
    Client.find(params[:id]).destroy
    render json: Client.all
  end
end
