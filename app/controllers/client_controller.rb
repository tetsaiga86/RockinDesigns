class ClientController < ApplicationController
  skip_before_filter :verify_authenticity_token

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

    # Sends email to user when user is created.
    ClientMailer.email(client).deliver
  end

  def list
    render json: Client.all
  end

  def destroy
    Client.find(params[:id]).destroy
    render json: Client.all
  end
end
