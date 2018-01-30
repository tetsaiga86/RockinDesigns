class ClientMailer < ApplicationMailer
  default from: ENV['my_email']

  def email info
    @info = {
      name: info.name,
      email: info.email,
      website: info.website,
      android: info.android,
      windows: info.windows,
      other: info.other,
      description: info.description
    }
    mail(to: ENV['my_email'], subject: 'new client')
  end
end
