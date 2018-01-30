# Preview all emails at http://localhost:3000/rails/mailers/client_mailer
class ClientMailerPreview < ActionMailer::Preview
  def preview
    ClientMailer.email(Client.first)
  end
end
