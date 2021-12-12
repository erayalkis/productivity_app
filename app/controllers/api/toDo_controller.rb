class Api::ToDoController < ApplicationController 

  def fetch_list 
    @to_do = ToDo.includes(:tasks).find(params[:id])
    if @to_do 
      render json: { list: @to_do, tasks: @to_do.tasks } 
    else
      render json: @to_do.errors.full_messages 
    end
  end
end