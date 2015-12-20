class OpCodesController < ApplicationController
  def new
    @op_code = OpCode.create({ php: params[:php] });
  end

  def show

  end

  def index

  end
end