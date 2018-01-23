module DataManipulation
  class Repos
    def current_repos(all_repos)
      sorted = all_repos.sort_by{ |repo| DateTime.parse(repo['updated_at']).to_i}
      sorted
    end
  end
end
